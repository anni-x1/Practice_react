import React,{useRef} from 'react'

export default function Forms() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus(); // Directly accesses the DOM element and focuses it
    };
    return (
        <>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input ref={inputRef}  onpretype="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                <button onClick={focusInput}>Swwwwu</button>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <div class="mb-3">
                <label for="basic-url" class="form-label">Your vanity URL</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                    <span class="input-group-text">.00</span>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
                    </div>

                    <div class="input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
            </>
            )
}
// import React, { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus(); // Directly accesses the DOM element and focuses it
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus the input</button>
//     </div>
//   );
// }

// export default FocusInput;
//========================================================================
// import React, { useRef, useEffect } from 'react'

// export default function Forms() {
//     const inputRef = useRef(null);
//     // useEffect(() => {
//     //     // Focus the input field when the component mounts
//     //     inputRef.current.focus();
//     // }, []);
    
//     return (
//         <div>
//             <input ref={inputRef} />;
//             <button onClick={()=>inputRef.current.focus()}>Focus the input</button>
//     </div>
//   )
// }




