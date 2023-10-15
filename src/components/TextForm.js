import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("")
  // setText is used to update the text variable

  const clickUpHandler = () => {
    // console.log("clicked clickUpHandler");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Coverted to UpperCase","success");
  }
  const clickLoHandler = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Coverted to LowerCase","success");
  }
  const onChangeHandler= (event) => {
    // console.log("clicked onChangeHandler");
    setText(event.target.value);
    
  }

  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces checked","success");
  }

  const titleCase= () => {
    let newtitle = text.replace(/\b\w/g, x => x.toUpperCase())
    setText(newtitle)
    props.showAlert("Capital case added","success");
  }
  const clear = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Cleared","success");
  }


  return (
    <>
      <div className='container mx-auto px-4'>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"><h1 className=' text-3xl' style={{color:props.mode==="white" ?"black":"white"}}>{props.heading}</h1></label>
        <textarea id="message"value={text} onChange={onChangeHandler} rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <button type="button" onClick={clear} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Clear</button>
        <button type="button" onClick={clickUpHandler} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2">Convert to Uppercase</button>
        <button type="button" onClick={clickLoHandler} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Convert to Lowercase</button>
        <button type="button" onClick={extraSpace}className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove Extra Space</button>
        <button type="button" onClick={titleCase} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Capital Case</button>
              
      </div> 
      <div className="container mx-auto px-4"  style={{color:props.mode==="white" ?"black":"white"}}>
        <h1 className='text-3xl font-semibold'>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3 className='text-2xl font-semibold'>Preview</h3>
        <p>{text.length>0?text:"Enter text in the above box to preview"}</p>
      </div>
      
   </>
  )
}

//Onchange was done so that u could type in the textarea
