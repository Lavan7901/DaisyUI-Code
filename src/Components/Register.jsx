
import React, { useState } from 'react';
import Input from "./Input";
import { useTranslation } from 'react-i18next';
import '../i18n/i18n.js';

function Register() {
  const { t, i18n } = useTranslation();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [selectLanguage, setSelectLanguage] = useState('');
  const [selectGender, setSelectGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [allFieldsEmptyError, setAllFieldsEmptyError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const languageOptions = [
    { key: "1", value: t("tamil") },
    { key: "2", value: t("english") },
    { key: "3", value: t("hindi") },
    { key: "4", value: t("telugu") },
    { key: "5", value: t("malayalam") },
    { key: "6", value: t("kannada") },
    { key: "7", value: t("urdu") },
    { key: "8", value: t("sanskrit") },
    { key: "9", value: t("marathi") },
    { key: "10", value: t("bengali") },
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
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!email.endsWith('@gmail.com')) {
      setEmailError(t('emailError'));
      return;
    }
    else {
      setEmailError('');
    }
  }
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleAddressChange = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
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

  const changeLanguage = (lang) => {
    setSelectLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100">
        <div className="card-body items-center text-center">
          <h1 className="card-title pt-3 pb-10" style={{ fontSize: '45px', fontFamily: "serif" }}>{t('registration')}</h1>
          <div className="grid grid-cols-2 gap-4 px-3">
          <div className='col 1'>
              <Input type="text" placeholder={t('name')} onChange={handleNameChange} />
              {allFieldsEmptyError && !name && <p className="error-message">{t('nameError')}</p>}
            </div>
            <div className='col 2'>
              <Input type="text" placeholder={t('email')} onChange={handleEmailChange} />
              {allFieldsEmptyError && !email && <p className="error-message">{t('emailErrorEmpty')}</p>}
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className='col 3'>
              <Input type="password" placeholder={t('password')} onChange={handlePasswordChange} />
              {allFieldsEmptyError && !password && <p className="error-message">{t('passwordError')}</p>}
            </div>
            <div className='col 4'>
              <textarea placeholder={t('address')} className="textarea textarea-bordered textarea-xs w-full max-w-xs text-lg" onChange={handleAddressChange} />
              {allFieldsEmptyError && !address && <p className="error-message">{t('addressError')}</p>}
            </div>
            <div className='col 5'>
              <select className="select select-bordered w-full max-w-xs text-lg" onChange={handleLanguageChange}>
                <option disabled selected value="">{t('selectLanguage')}</option>
                {languageOptions.map((option) => (
                  <option key={option.key} value={option.value}>{option.value}</option>
                ))}
              </select>
              {allFieldsEmptyError && !selectLanguage && <p className="error-message">{t('languageError')}</p>}
            </div>
            <div className='col 6'>
              <div className="join">
                <select className="select select-bordered join-item text-base">
                  {countryCodeOptions.map((option) => (
                    <option key={option.key} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <div>
                  <div>
                    <input className="input input-bordered join-item w-full text-base" type="number" placeholder={t('phoneNumber')} onChange={handlePhoneNumberChange} />
                    {allFieldsEmptyError && !phoneNumber && <p className="error-message">{t('phoneNumberError')}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className='col 7'>
              <div className='radio-button text-lg' onChange={handleGenderChange}>
                <label className="font-bold flex pb-2 text-lg">{t('gender')} &nbsp;</label>
                <div className=' flex flex-row'>
                <input type="radio" name="gender" value="Female" className="radio radio-error" />
                <label htmlFor="female">  &nbsp;{t('female')} &nbsp;</label>
                <input type="radio" name="gender" value="Male" className="radio radio-error" />
                <label htmlFor="male">  &nbsp;{t('male')} &nbsp;</label>
                <input type="radio" name="gender" value="Others" className="radio radio-error" />
                <label htmlFor="others">  &nbsp;{t('others')} &nbsp;</label>
              </div>
              </div>
              {allFieldsEmptyError && !selectGender && <p className="error-message">{t('genderError')}</p>}
            </div>
            <div className='col 8'>
              <div className="tooltip" data-tip={t('uploadAadhaar')}>
                <label htmlFor="aadhaarcard" className="font-bold mr-20 text-lg">{t('uploadAadhaar')}</label>
                <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-1" />
              </div>
            </div>
          </div>
          <div className="form-checkbox flex pl-5 pr-16 mt-5 text-lg">
            <input type="checkbox" className="checkbox checkbox-error" onChange={handleTermsChange} />
            <p>&nbsp;{t('termsAgreement')}</p>
          </div>
          {allFieldsEmptyError && !agreedToTerms && (<p className="error-message">{t('termsError')}</p>)}
          <div className="card-actions pr-10">
            <button className="btn btn-primary btn-wide" onClick={handleRegister}>{t('register')}</button>
          </div>
          <div className="language-selection mr-10 space-x-4 mt-1">
            <a href="#tamil" className="language-label text-lg" onClick={() => changeLanguage('tamil')}>{t('tamil')}</a>
            <a href="#english" className="language-label text-lg" onClick={() => changeLanguage('english')}>{t('english')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
