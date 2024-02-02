import {useState, useEffect} from "react";
import './App.css';
import { EmailSidebar } from "./components/emailsidebar/emailsidebar.component";
import { Email } from "./components/emailsidebar/email.component";
import axios from 'axios';
import { SearchBar } from "./components/searchbar/searchbar.component";
import { EmailBodyView } from "./components/emailbodyview/emailbodyview";

function App() {
  const [emails, setEmails] = useState([]);
  const [activeEmail, setActiveEmail] = useState({id:0});
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect (() => {
    const fetchEmails = async () => {
      const response = await axios('https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json');
      setEmails(response.data);
    };
    fetchEmails();
  }, []);

  const handleClick = (emailId) => {
    const selectedEmail = filteredEmails.find(email => email.id === emailId);
    console.log(selectedEmail);
    selectedEmail.read = "true";
    setActiveEmail(selectedEmail);
    setFilteredEmails([...filteredEmails]);
  }
  useEffect (() => {
    let filtered = [];
    if (searchInput ===""){
      filtered = emails
    } else {
      filtered = emails.filter(email => 
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
        );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value)
  };


  return (
    <div className="App">
      <section className="emailsidebar">
        <SearchBar
        placeholder='Search'
        handleInput={handleInput}/>
        <EmailSidebar emails={filteredEmails} handleClick={handleClick} activeEmail={activeEmail.id}/>
      </section>
      <div className="emailbodyview">
        <EmailBodyView email={activeEmail}/>
      </div>
    </div>
  );
}

export default App;
