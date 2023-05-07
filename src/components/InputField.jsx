
function InputField({handleInput,handleSubmit, text}) {

  return (
    <label>
    <input value={text} onChange={(e) => handleInput(e.target.value)}/>
    <button onClick={handleSubmit}>add todo</button>
  </label>
  );
}

export default InputField;