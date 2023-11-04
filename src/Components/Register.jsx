
import React, {useState} from 'react';
import Input from "./Input";

function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [selectLanguage, setSelectLanguage] = useState('');
  const [selectGender, setSelectGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [allFieldsEmptyError, setAllFieldsEmptyError] = useState(false);
  const [emailError,setEmailError] = useState('');

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  }
  const handleEmailChange =(e) =>{
    const email = e.target.value;
    setEmail(email);
    if (!email.endsWith('@gmail.com')) {
      setEmailError('Email must end with @gmail.com');
      return;
    }
      else{
        setEmailError('');
      }
  }
  const handlePasswordChange =(e) =>{
    const password = e.target.value;
    setPassword(password);
  }
  const handleAddressChange =(e) =>{
    const address = e.target.value;
    setAddress(address);
  }
  const handleLanguageChange = (e) => {
    const selectLanguage = e.target.value;
    setSelectLanguage(selectLanguage);
  }; 
  const handleGenderChange = (e) => {
    const selectGender = e.target.value;
    setSelectGender(selectGender);
  }; 
  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  }; 
  const handleTermsChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };
  

  const handleRegister = (e) => {
    e.preventDefault();
    setAllFieldsEmptyError(true);
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Address:', address);
    console.log('Language:', selectLanguage);
    console.log('Gender:', selectGender);
    console.log('Phone Number:', phoneNumber);

  };

    return(
        <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body items-center text-center ">
        <h1 className="card-title pt-3 pb-10 " style={{ fontSize: '45px' }}>Registration</h1>
        <Input type="text" placeholder="Name" onChange={handleNameChange}/>
        {allFieldsEmptyError && !name && <p className="error-message">Please enter your Name</p>}
        <Input type="text" placeholder="E-mail" onChange={handleEmailChange} />
        {allFieldsEmptyError && !email && <p className="error-message">Please enter your Email</p>}
        {emailError && <p className="error-message">{emailError}</p>}
        <Input type="password" placeholder="Password" onChange={handlePasswordChange} />
        {allFieldsEmptyError && !password && <p className="error-message">Please enter your Password</p>}
        <textarea placeholder="Address.." className="textarea textarea-bordered textarea-sm w-full max-w-xs" onChange={handleAddressChange} />
        {allFieldsEmptyError && !address && <p className="error-message">Please enter your Address</p>}
        <select className="select select-bordered w-full max-w-xs" onChange={handleLanguageChange}>
        <option disabled selected>Language</option>
        <option>Tamil</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Telugu</option>
        <option>Malayalam</option>
        </select>
        {allFieldsEmptyError && !selectLanguage && <p className="error-message">Please select your Language</p>}
        <div className="join">
         <select className="select select-bordered join-item">
         <option selected>+91</option>
         <option>+1</option>
         <option>+44</option>
         <option>+93</option>
         <option>+86</option>
         <option>+33</option>
         <option>+355</option>
         </select>
         <div>
        <div>
      <input className="input input-bordered join-item" type="number" placeholder="Phone number" onChange={handlePhoneNumberChange} />
      {allFieldsEmptyError && !phoneNumber && <p className="error-message">Please enter your PhoneNumber</p>}
       </div>
      </div>
      </div>
        <div className='radio-button flex pr-0 pt-2 pb-1' onChange={handleGenderChange}>
        <label className="font-bold">Gender &nbsp;</label>
        <input type="radio" name="gender" value="Female" className="radio radio-error" />
        <label htmlFor="male">&nbsp; Female &nbsp;</label>
        <input type="radio" name="gender"  value="Male"  className="radio radio-error" />
        <label htmlFor="male">&nbsp; Male &nbsp;</label>
        <input type="radio" name="gender"  value="Others" className="radio radio-error" />
        <label htmlFor="others">&nbsp; Others &nbsp;</label>
        </div>
        {allFieldsEmptyError && !selectGender && <p className="error-message">Please select the Gender</p>}
        <label htmlFor="aadhaarcard" className="font-bold mr-40 pl-4">Upload Aadhaar Card :</label>
        <div className="tooltip" data-tip="upload AadhaarCard">
        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mr-10" />
        </div>
        <div className="form-checkbox flex pr-16">
         <input type="checkbox" className="checkbox checkbox-error" onChange={handleTermsChange} />
         <p>&nbsp;I agree to Terms and Conditions</p>
         </div>
         {allFieldsEmptyError && !agreedToTerms && (<p className="error-message">Please agree to Terms and Conditions</p>)}
       <div className="card-actions py-5">
       <button className="btn btn-error btn-wide" onClick={handleRegister}>REGISTER</button>
    </div>
  </div>
</div>
</div>
          
)
}
 export default Register;
