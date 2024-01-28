import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNewContact from './createnewContact';
import { useMutation, useQueryClient } from 'react-query';
import "./components.css";
import { createContextapi } from './Context';
import { useContext } from 'react';
import updatecontact from './updatecontact';

export default function AddContact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    birth: "", email: "", fullname: "", file: "", phonenumber: ""
  });

  const { update, setUpdate } = useContext(createContextapi);
  const [filePreview, setFilePreview] = useState(null);

  //app new contact
  const { mutate: updateContacts, isLoading: updateLoading, isError: updateError } = useMutation(updatecontact, {
    onSuccess: () => queryClient.invalidateQueries("contact")
  });

  //Update contact
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(createNewContact, {
    onSuccess: () => queryClient.invalidateQueries("contact")
  });

  useEffect(() => {
    if (update) {
      setContact({
        ...contact,
        birth: update.birth.split("T")[0],
        email: update.email,
        fullname: update.fullname,
        file: update.file,
        phonenumber: update.phonenumber,
        id: update._id
      });
    }
  }, [update]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setContact({ ...contact, file });

    // Show preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update) {
      updateContacts(contact);
      if(!isLoading){
        navigate('/');
      }
      setUpdate(null);
    } else {
      mutate(contact);
      console.log(contact);
      if(!isLoading){
        navigate('/');
      }
    }
    setContact({ birth: "", email: "", fullname: "", file: "", phonenumber: "" });
    setFilePreview(null); // Clear file preview after submission
  };

  return (
    <section className='addcontact w- h-[100vh] relative'>
      <div className='Addcontact'>
        <button
          className='Addcontactbtn'
          onClick={() => navigate(-1)}
        >
          Go to Back
        </button>
      </div>
      <div className='formdiv flex flex-row-reverse bg-green-500 w-fit rounded-3xl '>
        <div className=' w-full h-full flex items-center justify-center rounded-3xl'>
          {filePreview && (
            <img
              src={filePreview}
              alt="Preview"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          )}
        </div>
        <form
          className='form '
          onSubmit={handleSubmit}
        >
          <h1>{update ? "Update Contact" : "Add contact"}</h1>
          <input
            value={contact.fullname}
            onChange={(e) => setContact({ ...contact, fullname: e.target.value })}
            type="text"
            placeholder="Full Name..."
          ></input>
          <input
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            type="email"
            placeholder="Email..."
          ></input>
          <input
            value={contact.phonenumber}
            onChange={(e) => setContact({ ...contact, phonenumber: e.target.value })}
            type="text"
            placeholder="Phone Number..."
          ></input>
          <input
            value={contact.birth}
            onChange={(e) => setContact({ ...contact, birth: e.target.value })}
            type="Date"
          ></input>
          <input
            onChange={handleFileChange}
            type="file"
          ></input>

          <button>{update ? "Update " : "Submit"}</button>
        </form>
      </div>
      {isLoading && <div className='text-[95px] w-full h-full flex justify-center items-center  text-gray-600 opacity-70 absolute'>
        Loading...
      </div>}
    </section>
  );
}
