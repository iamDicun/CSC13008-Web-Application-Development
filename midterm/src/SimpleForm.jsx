import {useState} from 'react';

export default function SimpleForm() {
    const [formdata, setFormdata] = useState({});
    const onChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formdata);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={onChange} />
            </label>
            <br />
            <label>
                Email:  
                <input type="email" name="email" onChange={onChange} />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" onChange={onChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}