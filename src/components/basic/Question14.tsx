import { useState, type ChangeEvent, type SubmitEvent } from 'react';

const RegistrationForm = () => {
  // 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value));
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setAge(0);
        setSubmitted(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        名前:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        メールアドレス:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        年齢:
                        <input
                            type="number"
                            value={age}
                            onChange={handleAgeChange}
                        />
                    </label>
                </div>
                <button type="submit">登録</button>
                <button type="button" onClick={handleReset}>
                    クリア
                </button>
            </form>

            {/* 送信時に全ての値が表示される */}
            {submitted && (
                <div>
                    <h2>登録内容</h2>
                    <p>名前: {name}</p>
                    <p>メールアドレス: {email}</p>
                    <p>年齢: {age}</p>
                </div>
            )}
        </div>
    );

};

export default RegistrationForm;