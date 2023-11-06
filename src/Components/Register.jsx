
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

  const languageOptions = [
    { key: "1", value: "Tamil" },
    { key: "2", value: "English" },
    { key: "3", value: "Hindi" },
    { key: "4", value: "Telugu" },
    { key: "5", value: "Malayalam" },
    { key: "6", value: "Kannada" },
    { key: "7", value: "Urdu" },
    { key: "8", value: "Sanskrit" },
    { key: "9", value: "Marathi" },
    { key: "10", value: "Bengali" },
  ];

  const countryCodeOptions = [
    { key: "1", value: "+91" },
    { key: "2", value: "+1" },
    { key: "3", value: "+44" },
    { key: "4", value: "+93" },
    { key: "5", value: "+86" },
    { key: "6", value: "+33" },
    { key: "7", value: "+355" },
    { key: "8", value: "+81" },
    { key: "9", value: "+60" },
    { key: "10", value: "+65" },
  ];

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
        <h1 className="card-title pt-3 pb-10 " style={{ fontSize: '45px',fontFamily:"serif" }}>Registration</h1>
        <div className="grid grid-cols-2 gap-4 px-3">
          <div className='col 1'>
        <Input type="text" placeholder="Name" onChange={handleNameChange}/>
        {allFieldsEmptyError && !name && <p className="error-message">Please enter your Name</p>}
        </div>
        <div className='col 2'>
        <Input type="text" placeholder="E-mail" onChange={handleEmailChange} />
        {allFieldsEmptyError && !email && <p className="error-message">Please enter your Email</p>}
        {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className='col 3'>
        <Input type="password" placeholder="Password" onChange={handlePasswordChange} />
        {allFieldsEmptyError && !password && <p className="error-message">Please enter your Password</p>}
        </div>
        <div className='col 4'>
        <textarea placeholder="Address" className="textarea textarea-bordered textarea-xs w-full max-w-xs" onChange={handleAddressChange} />
        {allFieldsEmptyError && !address && <p className="error-message">Please enter your Address</p>}
        </div>
        <div className='col 5'>
        <select className="select select-bordered w-full max-w-xs" onChange={handleLanguageChange}>
         <option disabled selected value="">Select Language</option>
        {languageOptions.map((option) => (
         <option key={option.key} value={option.value}>{option.value}</option>))}
        </select>
        {allFieldsEmptyError && !selectLanguage && <p className="error-message">Please select your Language</p>}
        </div>
        <div className='col 6'>
        <div className="join pr-3">
         <select className="select select-bordered join-item">
         {countryCodeOptions.map((option) => (
         <option key={option.key} value={option.value}>
         {option.value}
         </option>
          ))}
         </select>
         <div>
        <div>
      <input className="input input-bordered join-item" type="number" placeholder="Phone number" onChange={handlePhoneNumberChange} />
      {allFieldsEmptyError && !phoneNumber && <p className="error-message">Please enter your PhoneNumber</p>}
       </div>
       </div>
      </div>
      </div>
      <div className='col 7'>
        <div className='radio-button flex pl-4 mt-3' onChange={handleGenderChange}>
        <label className="font-bold">Gender &nbsp;</label>
        <input type="radio" name="gender" value="Female" className="radio radio-error" />
        <label htmlFor="male">&nbsp; Female &nbsp;</label>
        <input type="radio" name="gender"  value="Male"  className="radio radio-error" />
        <label htmlFor="male">&nbsp; Male &nbsp;</label>
        <input type="radio" name="gender"  value="Others" className="radio radio-error" />
        <label htmlFor="others">&nbsp; Others &nbsp;</label>
        </div>
        {allFieldsEmptyError && !selectGender && <p className="error-message">Please select the Gender</p>}
        </div>
        <div className='col 8'>
        <div className="tooltip" data-tip="upload AadhaarCard">
        <label htmlFor="aadhaarcard" className="font-bold pr-36">Upload Aadhaar Card </label>
        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-1" />
        </div>
        </div>
        </div>
        <div className="form-checkbox flex pl-5 pr-16">
         <input type="checkbox" className="checkbox checkbox-error" onChange={handleTermsChange} />
         <p>&nbsp;I agree to Terms and Conditions</p>
         </div>
         {allFieldsEmptyError && !agreedToTerms && (<p className="error-message">Please agree to Terms and Conditions</p>)}
        <div className="card-actions pr-10">
       <button className="btn btn-primary btn-wide" onClick={handleRegister}>REGISTER</button>
    </div>
  </div>
</div>
</div>  
)
}
 export default Register;
