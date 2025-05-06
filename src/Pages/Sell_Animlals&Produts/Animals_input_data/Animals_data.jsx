    import React from 'react'
    import { useState, useEffect } from 'react';
    import Navbar from '../../../Compounts/Navbar/Navbar'
    import { useLocation } from 'react-router-dom';
    import { Animals_sell_pages } from '../../../Array_Data/Categ';
    import './Animals_data.css'
    import { Select } from '@mui/material';
    import Form from 'react-bootstrap/Form';
    import { FileUploader } from "react-drag-drop-files";


    const Animals_data = () => {
        const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
        const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
        // Update theme in localStorage whenever theme state changes
        useEffect(() => {
            localStorage.setItem('current_thems', theme);
        }, [theme]);

        let use_Location = useLocation();
        let current_id = use_Location.pathname.split('/')[2]
        let current_data = Animals_sell_pages.filter((v) => v.Name == current_id)


        let [Exchanges, update_exchages] = useState('')// Exchages Question

        const fileTypes = ["JPG", "PNG", "GIF"];

        return (
            <div className={`container ${theme}`} style={{ margin: '0px' }}>
                <Navbar theme={theme} upadtethem={upadtethem} />
                <div>
                    <h1>FARM-MART</h1>
                    {current_data.length > 0 ? (
                        current_data.map((values, index) => {
                            return (
                                <>
                                    <h1 className='heading_Animals'>{values.Name} Information</h1>
                                    <div>
                                        <input type='text' className='text1' placeholder='Enter a your Full Name'></input>
                                        <input type='email' className='text1' placeholder='Enter a your Email_id'></input>
                                        <input type='text' className='text1' placeholder='Enter a your Ear_Tag_ID'></input>

                                        {(values.Name == 'Cow' || values.Name == 'Buffola' ?
                                            <>
                                                <Cow_Buffola_info />
                                            </>
                                            :
                                            <>
                                            </>
                                        )}

                                        {(values.Name=='Horse' ?
                                            <>
                                                <Hen_info/>
                                            </>
                                            :
                                            <>
                                            </>
                                        )}

                                        {(values.Name=='Sheep' ?
                                            <>
                                                <Sheep_info/>
                                            </>
                                            :
                                            <></>
                                        )}

                                        {(values.Name=='Hen' ?
                                            <>
                                                <Hen_info/>
                                            </>
                                            :
                                            <></>
                                        )}

                                        {(values.Name=="Pig" ?
                                            <>
                                                <Pig_info/>
                                            </>
                                            :
                                            <></>
                                        )}
                                        
                                        <div>
                                            <textarea type='text' placeholder='Enter your address' className='text1' style={{ marginLeft: '0', marginTop: '0' }}></textarea>
                                            <input type="text" placeholder='Enter a Google Map link of address' className='text1'></input>
                                            <div>
                                                <h3>Exchages offer : {Exchanges}</h3>
                                                <div className='Dropdown_2' onChange={(c) => update_exchages(c.target.value)}>
                                                    <Form.Check className='check_box1'
                                                        type='radio'
                                                        label='Yes'
                                                        value='Yes'
                                                        name='update_Exchanges'
                                                        aria-label="radio-yes"
                                                        checked={Exchanges == 'Yes'}
                                                    ></Form.Check>
                                                    <Form.Check className='check_box1'
                                                        type='radio'
                                                        label='No'
                                                        value='NO'
                                                        name='upadate_Exchanges'
                                                        aria-label="radio-No"
                                                        checked={Exchanges == 'NO'}
                                                    ></Form.Check>
                                                </div>
                                            </div>
                                            <div>
                                            <ImagesDrop1 />
                                            <ImagesDrop1 />
                                            </div>
                                            <button className='submit_bts' style={{ borderRadius: '25px' }}>Submit</button>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    ) : (
                        <>
                            <h1>Data is not found</h1>
                        </>
                    )}
                </div>
            </div>
        )
    }


    function ImagesDrop1() {
        const [file, setFile] = useState(null);
        const fileTypes = ["JPG", "PNG", "GIF"];

        const handleChange = (file) => {
            setFile(file);
        };
        return (
            <div className='file_1'>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                {file && (
                    <div style={{ marginTop: "20px" }}>
                        <p>Selected File: {file.name}</p>
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            style={{ width: "95%", height: '50vh', paddingLeft:'5%', borderRadius: "8px" }}
                        />
                    </div>
                )}
            </div>
        );
    }

function Cow_Buffola_info() {
        let [selects, update_select] = useState('') // for Types of breed Question
        let [select_age, update_age] = useState('') // for Ages Question
        let [Hors_yes, Hors_no] = useState('') // Hors_ Question
        let [select_all, upadate_all] = useState('') //Vaccination Question
        let [Gender, update_Gender] = useState('') // Gender Question
        let [Pregnancy, update_Pregnancy] = useState('')// Pregnancy_Status Question
        return (
            <><div className='container_data'>
                <div class="col-3">
                    <div>
                        {/* Types of Breed */}
                        <select className='Dropdown_1' value={selects} onChange={(changes) => update_select(changes.target.value)}>
                            <option value="">Types of Breed</option>
                            <option value="Holstein Friesian (HF)">Holstein Friesian (HF)</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Brown Swiss ">Brown Swiss </option>
                            <option value="Ayrshire">Ayrshire</option>
                            <option value="Milking Shorthorn ">Milking Shorthorn </option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="col-3">
                    {/* Ages */}
                    <select className='Dropdown_1' value={select_age} onChange={(chages1) => update_age(chages1.target.value)}>
                        <option value="">Age Stages</option>
                        <option value="0 to 1 month (Newborn)">0 to 1 month (Newborn)</option>
                        <option value="	1 to 6 months (Infant)">1 to 6 months (Infant)</option>
                        <option value="6 months to 1 year (Weaned)">6 months to 1 year (Weaned)</option>
                        <option value="1 to 2 years (Yearling)">1 to 2 years (Yearling)</option>
                        <option value="2 to 3 years (Young Adult)">2 to 3 years (Young Adult)</option>
                        <option value="3 to 8 years (Adult Cow/Bull)">3 to ~8 years (Adult Cow/Bull)</option>
                        <option value="8+ years (Senior / Aged)">8+ years (Senior / Aged)</option>
                    </select>
                </div>
                <div class="col-3">
                    <select className='Dropdown_1'>
                        <option value="">Milk Production</option>
                        <option value="7-12 liters/day">7-12 liters/day</option>
                        <option value="	10-15 liters/day">0-15 liters/day</option>
                        <option value="8-12 liters/day">8-12 liters/day</option>
                        <option value="	25-30 liters/day">25-30 liters/day</option>
                        <option value="20-25 liters/day">20-25 liters/day</option>
                    </select>
                </div>
                <div class="col-3">
                    <select className='Dropdown_1'>
                        <option value="">Weight</option>
                        <option value="200 Kg">200 Kg</option>
                        <option value="300 Kg">300 Kg</option>
                        <option value="400 kg">400 Kg</option>
                        <option value="500 kg">500 kg</option>
                        <option value="600 kg">600 kg</option>
                        <option value="more..">More..</option>
                    </select>
                </div>
            </div><div className='readio_box'>
                    <div className="col-4">
                        <h3>Hors is Present: {Hors_yes} </h3>
                        <div className='Dropdown_2' value={Hors_yes} onChange={(chages12) => Hors_no(chages12.target.value)}>
                            <Form.Check className='check_box1'
                                type="radio"
                                label="Yes"
                                name="Hors_yes"
                                value="Yes"
                                checked={Hors_yes === 'Yes'}
                                aria-label="radio-yes"></Form.Check>

                            <Form.Check className='check_box1'
                                type="radio"
                                label="No"
                                name="Hors_yes"
                                value="No"
                                checked={Hors_yes === 'No'}
                                aria-label="radio-no" />
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>Vaccination of cow :  {select_all}</h3>
                        <div className="Dropdown_2" value={select_all} onChange={(c) => upadate_all(c.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Yes'
                                value='Yes'
                                name='upadate_all'
                                aria-label="radio-yes"
                                checked={select_all == 'Yes'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='No'
                                value='NO'
                                name='upadate_all'
                                aria-label="radio-No"
                                checked={select_all == 'NO'}
                            ></Form.Check>

                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <h3>Gender: {Gender}</h3>
                        </div>
                        <div className="Dropdown_2" value={Gender} onChange={(v) => update_Gender(v.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Male'
                                value='Male'
                                name='update_Gender'
                                checked={Gender == 'Male'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Female'
                                value='Female'
                                name='upadate_Gender'
                                checked={Gender == 'Female'}
                            ></Form.Check>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>Pregnancy Status : {Pregnancy}</h3>
                        <div className='Dropdown_2' onChange={(c) => update_Pregnancy(c.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Yes'
                                value='Yes'
                                name='update_Pregnancy'
                                aria-label="radio-yes"
                                checked={Pregnancy == 'Yes'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='No'
                                value='NO'
                                name='upadate_Pregnancy'
                                aria-label="radio-No"
                                checked={Pregnancy == 'NO'}
                            ></Form.Check>
                        </div>
                    </div>
                </div></>
        )
    }

    function Hen_info(){
        let [selects, update_select] = useState('') // for Types of breed Question
        let [select_age, update_age] = useState('') // for Ages Question
        let [Hors_yes, Hors_no] = useState('') // Hors_ Question
        let [select_all, upadate_all] = useState('') //Vaccination Question
        let [Gender, update_Gender] = useState('') // Gender Question
        let [Pregnancy, update_Pregnancy] = useState('')// Pregnancy_Status Question
        return (
            <><div className='container_data'>
                <div class="col-3">
                    <div>
                        {/* Types of Breed */}
                        <select className='Dropdown_1' value={selects} onChange={(changes) => update_select(changes.target.value)}>
                            <option value="">Types of Breed</option>
                            <option value="Rhode Island Red">Rhode Island Red (HF)</option>
                            <option value="Leghorn">Leghorn</option>
                            <option value="Polish">Polish</option>
                            <option value="ISA Brown">ISA Brown</option>
                            <option value="Australorp">Australorp</option>
                            <option value="Plymouth Rock">Plymouth Rock</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="col-3">
                    {/* Ages */}
                    <select className='Dropdown_1' value={select_age} onChange={(chages1) => update_age(chages1.target.value)}>
                        <option value="">Age Stages</option>
                        <option value="0 to 1 month (Newborn)">0 to 1 month (Newborn chick)</option>
                        <option value="	1 to 6 months (Infant)">1 to 6 months (Infant)</option>
                        <option value="6 months to 1 year (Weaned)">6 months to 1 year (Weaned)</option>
                    </select>
                </div>
                <div class="col-3">
                    <select className='Dropdown_1'>
                        <option value="">Egg Production</option>
                        <option value="	5–7 eggs/week">5–7 eggs/week</option>
                        <option value="	4–6 eggs/week">4–6 eggs/week</option>
                        <option value="	2–4 eggs/week">2–4 eggs/week</option>
                    </select>
                </div>
                <div class="col-3">
                    <select className='Dropdown_1'>
                        <option value="">Weight Range:</option>
                        <option value="1.5 to 2.5 kg">1.5 to 2.5 kg</option>
                        <option value="1500 to 2500 grams">1500 to 2500 grams</option>
                        <option value="2.5 to 3.5 kg">2.5 to 3.5 kg</option>
                        <option value="2500 to 3500 grams">2500 to 3500 grams</option>
                        <option value="3.5 to 5.5 kg">3.5 to 5.5 kg</option>
                        <option value="more..">More..</option>
                    </select>
                </div>
            </div><div className='readio_box'>
                    <div className="col-4">
                        <h3> Is the hen broody (sitting on eggs)? {Hors_yes} </h3>
                        <div className='Dropdown_2' value={Hors_yes} onChange={(chages12) => Hors_no(chages12.target.value)}>
                            <Form.Check className='check_box1'
                                type="radio"
                                label="Yes"
                                name="Hors_yes"
                                value="Yes"
                                checked={Hors_yes === 'Yes'}
                                aria-label="radio-yes"></Form.Check>

                            <Form.Check className='check_box1'
                                type="radio"
                                label="No"
                                name="Hors_yes"
                                value="No"
                                checked={Hors_yes === 'No'}
                                aria-label="radio-no" />
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>Vaccination of Hen :  {select_all}</h3>
                        <div className="Dropdown_2" value={select_all} onChange={(c) => upadate_all(c.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Yes'
                                value='Yes'
                                name='upadate_all'
                                aria-label="radio-yes"
                                checked={select_all == 'Yes'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='No'
                                value='NO'
                                name='upadate_all'
                                aria-label="radio-No"
                                checked={select_all == 'NO'}
                            ></Form.Check>

                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <h3>Gender: {Gender}</h3>
                        </div>
                        <div className="Dropdown_2" value={Gender} onChange={(v) => update_Gender(v.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Male'
                                value='Male'
                                name='update_Gender'
                                checked={Gender == 'Male'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Female'
                                value='Female'
                                name='upadate_Gender'
                                checked={Gender == 'Female'}
                            ></Form.Check>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>Is the hen currently laying eggs?  : {Pregnancy}</h3>
                        <div className='Dropdown_2' onChange={(c) => update_Pregnancy(c.target.value)}>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='Yes'
                                value='Yes'
                                name='update_Pregnancy'
                                aria-label="radio-yes"
                                checked={Pregnancy == 'Yes'}
                            ></Form.Check>
                            <Form.Check className='check_box1'
                                type='radio'
                                label='No'
                                value='NO'
                                name='upadate_Pregnancy'
                                aria-label="radio-No"
                                checked={Pregnancy == 'NO'}
                            ></Form.Check>
                        </div>
                    </div>
                </div></>
        )
    }

function Horse_info(){
    let [selects, update_select] = useState('') // for Types of breed Question
    let [select_age, update_age] = useState('') // for Ages Question
    let [Hors_yes, Hors_no] = useState('') // Hors_ Question
    let [select_all, upadate_all] = useState('') //Vaccination Question
    let [Gender, update_Gender] = useState('') // Gender Question
    let [Pregnancy, update_Pregnancy] = useState('')// Pregnancy_Status Question
    return (
        <><div className='container_data'>
            <div class="col-3">
                <div>
                    {/* Types of Breed */}
                    <select className='Dropdown_1' value={selects} onChange={(changes) => update_select(changes.target.value)}>
                        <option value="">Types of Breed</option>
                        <option value=" Light Horses"> Light Horses</option>
                        <option value="Draft Horses">Draft Horses</option>
                        <option value=" Warmbloods"> Warmbloods</option>
                        <option value="Gaited Horses "> Gaited Horses </option>
                        <option value="Ponies">Ponies</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                {/* Ages */}
                <select className='Dropdown_1' value={select_age} onChange={(chages1) => update_age(chages1.target.value)}>
                    <option value="">Age Stages</option>
                    <option value="0 to 1 month (Newborn)">0 to 12 month (Newborn)</option>
                    <option value="1 to 2 years (Yearling)">1 to 2 years (Yearling)</option>
                    <option value="2 to 3 years (Young Adult)">2 to 3 years (Young Adult)</option>
                    <option value="3 to 8 years (Adult Cow/Bull)">3 to ~8 years</option>
                    <option value="8+ years (Senior / Aged)">8+ years (Senior / Aged)</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Horse Colour:</option>
                    <option value="Brown">Brown Colour</option>
                    <option value="	white">White Colour</option>
                    <option value="black">Balck Colour</option>
                    <option value="	both">White & Black colour</option>
                    <option value="other">Other Colour..</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Weight</option>
                    <option value="200 Kg">200 Kg</option>
                    <option value="300 Kg">300 Kg</option>
                    <option value="400 kg">400 Kg</option>
                    <option value="500 kg">500 kg</option>
                    <option value="600 kg">600 kg</option>
                    <option value="more..">More..</option>
                </select>
            </div>
        </div><div className='readio_box'>
                <div className="col-4">
                    <h3>Used_for_Racing {Hors_yes} </h3>
                    <div className='Dropdown_2' value={Hors_yes} onChange={(chages12) => Hors_no(chages12.target.value)}>
                        <Form.Check className='check_box1'
                            type="radio"
                            label="Yes"
                            name="Hors_yes"
                            value="Yes"
                            checked={Hors_yes === 'Yes'}
                            aria-label="radio-yes"></Form.Check>

                        <Form.Check className='check_box1'
                            type="radio"
                            label="No"
                            name="Hors_yes"
                            value="No"
                            checked={Hors_yes === 'No'}
                            aria-label="radio-no" />
                    </div>
                </div>
                <div className="col-4">
                    <h3>Vaccination of Horse :  {select_all}</h3>
                    <div className="Dropdown_2" value={select_all} onChange={(c) => upadate_all(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='upadate_all'
                            aria-label="radio-yes"
                            checked={select_all == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_all'
                            aria-label="radio-No"
                            checked={select_all == 'NO'}
                        ></Form.Check>

                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h3>Gender: {Gender}</h3>
                    </div>
                    <div className="Dropdown_2" value={Gender} onChange={(v) => update_Gender(v.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Male'
                            value='Male'
                            name='update_Gender'
                            checked={Gender == 'Male'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Female'
                            value='Female'
                            name='upadate_Gender'
                            checked={Gender == 'Female'}
                        ></Form.Check>
                    </div>
                </div>
                <div className="col-4">
                    <h3>Pregnancy Status : {Pregnancy}</h3>
                    <div className='Dropdown_2' onChange={(c) => update_Pregnancy(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='update_Pregnancy'
                            aria-label="radio-yes"
                            checked={Pregnancy == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_Pregnancy'
                            aria-label="radio-No"
                            checked={Pregnancy == 'NO'}
                        ></Form.Check>
                    </div>
                </div>
            </div></>
    )
}

function Sheep_info(){
    let [selects, update_select] = useState('') // for Types of breed Question
    let [select_age, update_age] = useState('') // for Ages Question
    let [Hors_yes, Hors_no] = useState('') // Hors_ Question
    let [select_all, upadate_all] = useState('') //Vaccination Question
    let [Gender, update_Gender] = useState('') // Gender Question
    let [Pregnancy, update_Pregnancy] = useState('')// Pregnancy_Status Question
    return (
        <><div className='container_data'>
            <div class="col-3">
                <div>
                    {/* Types of Breed */}
                    <select className='Dropdown_1' value={selects} onChange={(changes) => update_select(changes.target.value)}>
                        <option value="">Types of Breed</option>
                        <option value=" Wool Breeds:">  Wool Breeds</option>
                        <option value="Meat Breeds:">Meat Breeds</option>
                        <option value="Dual-Purpose Breeds:">Dual-Purpose Breeds</option>
                        <option value="Dairy Breeds">Dairy Breeds</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                {/* Ages */}
                <select className='Dropdown_1' value={select_age} onChange={(chages1) => update_age(chages1.target.value)}>
                    <option value="">Age Stages</option>
                    <option value="0 to 1 month (Newborn)">0 to 12 month (Newborn)</option>
                    <option value="1 to 2 years (Yearling)">1 to 2 years (Yearling)</option>
                    <option value="2 to 3 years (Young Adult)">2 to 3 years (Young Adult)</option>
                    <option value="3 to 8 years (Adult Cow/Bull)">3 to ~8 years</option>
                    <option value="8+ years (Senior / Aged)">8+ years (Senior / Aged)</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Wool Production by Week:</option>
                    <option value="Week 1-4">Week 1-4</option>
                    <option value="Month 1–3">Month 1–3</option>
                    <option value="Month 3–6">Month 3–6</option>
                    <option value="">By Year...</option>
                    <option value="other">Other Colour..</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Weight</option>
                    <option value="200 Kg">15 Kg</option>
                    <option value="300 Kg">30 Kg</option>
                    <option value="400 kg">45 Kg</option>
                    <option value="500 kg">55 kg</option>
                    <option value="600 kg">80 kg</option>
                    <option value="more..">More..</option>
                </select>
            </div>
        </div><div className='readio_box'>
                <div className="col-4">
                    <h3>Is the sheep in good health {Hors_yes} </h3>
                    <div className='Dropdown_2' value={Hors_yes} onChange={(chages12) => Hors_no(chages12.target.value)}>
                        <Form.Check className='check_box1'
                            type="radio"
                            label="Yes"
                            name="Hors_yes"
                            value="Yes"
                            checked={Hors_yes === 'Yes'}
                            aria-label="radio-yes"></Form.Check>

                        <Form.Check className='check_box1'
                            type="radio"
                            label="No"
                            name="Hors_yes"
                            value="No"
                            checked={Hors_yes === 'No'}
                            aria-label="radio-no" />
                    </div>
                </div>
                <div className="col-4">
                    <h3>Vaccination of Sheep :  {select_all}</h3>
                    <div className="Dropdown_2" value={select_all} onChange={(c) => upadate_all(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='upadate_all'
                            aria-label="radio-yes"
                            checked={select_all == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_all'
                            aria-label="radio-No"
                            checked={select_all == 'NO'}
                        ></Form.Check>

                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h3>Gender: {Gender}</h3>
                    </div>
                    <div className="Dropdown_2" value={Gender} onChange={(v) => update_Gender(v.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Male'
                            value='Male'
                            name='update_Gender'
                            checked={Gender == 'Male'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Female'
                            value='Female'
                            name='upadate_Gender'
                            checked={Gender == 'Female'}
                        ></Form.Check>
                    </div>
                </div>
                <div className="col-4">
                    <h3>Pregnancy Status : {Pregnancy}</h3>
                    <div className='Dropdown_2' onChange={(c) => update_Pregnancy(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='update_Pregnancy'
                            aria-label="radio-yes"
                            checked={Pregnancy == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_Pregnancy'
                            aria-label="radio-No"
                            checked={Pregnancy == 'NO'}
                        ></Form.Check>
                    </div>
                </div>
            </div></>
    )
}

function Pig_info(){
    let [selects, update_select] = useState('') // for Types of breed Question
    let [select_age, update_age] = useState('') // for Ages Question
    let [Hors_yes, Hors_no] = useState('') // Hors_ Question
    let [select_all, upadate_all] = useState('') //Vaccination Question
    let [Gender, update_Gender] = useState('') // Gender Question
    let [Pregnancy, update_Pregnancy] = useState('')// Pregnancy_Status Question
    return (
        <><div className='container_data'>
            <div class="col-3">
                <div>
                    {/* Types of Breed */}
                    <select className='Dropdown_1' value={selects} onChange={(changes) => update_select(changes.target.value)}>
                        <option value="">Types of Breed</option>
                        <option value="Landrace">Landrace</option>
                        <option value="Berkshire">Berkshire</option>
                        <option value="Hampshire">Hampshire</option>
                        <option value="Duroc">Duroc</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                {/* Ages */}
                <select className='Dropdown_1' value={select_age} onChange={(chages1) => update_age(chages1.target.value)}>
                    <option value="">Age Stages</option>
                    <option value="0 to 1 month (Newborn)">0 to 12 month (Newborn)</option>
                    <option value="1 to 2 years (Yearling)">1 to 2 years (Yearling)</option>
                    <option value="2 to 3 years (Young Adult)">2 to 3 years (Young Adult)</option>
                    <option value="3 to 8 years (Adult Cow/Bull)">3 to ~8 years</option>
                    <option value="8+ years (Senior / Aged)">8+ years (Senior / Aged)</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Is the pig ready for breeding</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Sure">Not Sure</option>
                </select>
            </div>
            <div class="col-3">
                <select className='Dropdown_1'>
                    <option value="">Weight</option>
                    <option value="200 Kg">15 Kg</option>
                    <option value="300 Kg">30 Kg</option>
                    <option value="400 kg">45 Kg</option>
                    <option value="500 kg">55 kg</option>
                    <option value="600 kg">80 kg</option>
                    <option value="more..">More..</option>
                </select>
            </div>
        </div><div className='readio_box'>
                <div className="col-4">
                    <h3>Is the sheep in good health {Hors_yes} </h3>
                    <div className='Dropdown_2' value={Hors_yes} onChange={(chages12) => Hors_no(chages12.target.value)}>
                        <Form.Check className='check_box1'
                            type="radio"
                            label="Yes"
                            name="Hors_yes"
                            value="Yes"
                            checked={Hors_yes === 'Yes'}
                            aria-label="radio-yes"></Form.Check>

                        <Form.Check className='check_box1'
                            type="radio"
                            label="No"
                            name="Hors_yes"
                            value="No"
                            checked={Hors_yes === 'No'}
                            aria-label="radio-no" />
                    </div>
                </div>
                <div className="col-4">
                    <h3>Vaccination of Pig :  {select_all}</h3>
                    <div className="Dropdown_2" value={select_all} onChange={(c) => upadate_all(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='upadate_all'
                            aria-label="radio-yes"
                            checked={select_all == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_all'
                            aria-label="radio-No"
                            checked={select_all == 'NO'}
                        ></Form.Check>

                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h3>Gender: {Gender}</h3>
                    </div>
                    <div className="Dropdown_2" value={Gender} onChange={(v) => update_Gender(v.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Male'
                            value='Male'
                            name='update_Gender'
                            checked={Gender == 'Male'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Female'
                            value='Female'
                            name='upadate_Gender'
                            checked={Gender == 'Female'}
                        ></Form.Check>
                    </div>
                </div>
                <div className="col-4">
                    <h3>Pregnancy Status : {Pregnancy}</h3>
                    <div className='Dropdown_2' onChange={(c) => update_Pregnancy(c.target.value)}>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='Yes'
                            value='Yes'
                            name='update_Pregnancy'
                            aria-label="radio-yes"
                            checked={Pregnancy == 'Yes'}
                        ></Form.Check>
                        <Form.Check className='check_box1'
                            type='radio'
                            label='No'
                            value='NO'
                            name='upadate_Pregnancy'
                            aria-label="radio-No"
                            checked={Pregnancy == 'NO'}
                        ></Form.Check>
                    </div>
                </div>
            </div></>
    )
}
export default Animals_data;
