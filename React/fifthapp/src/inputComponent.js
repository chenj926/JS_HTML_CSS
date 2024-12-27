import { useState } from "react";
import { useRef } from "react";

export default function InputComponent() {
    const [form, setForm] = useState({
        firstName: "Eric",
        lastName: "Chen",
        userId: "0001",
    });

    return (
        <>
            <label>
                First Name:
                <input
                    value={form.firstName}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last Name:
                <input
                    value={form.lastName}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                userId:
                <input
                    value={form.userId}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            userId: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName} {form.lastName} ({form.userId})
            </p>
        </>
    );
}

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        {/* <p>{inputEl}</p> */}
      </>
    );
  }

  
export { TextInputWithFocusButton };
