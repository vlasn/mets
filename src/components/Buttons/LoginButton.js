//reusable button component for login fields
import React from "react"

const LoginButton = props => (
    <div>
        <input
            type="submit"
            onClick={e =>props.submitHandler(e)}
            value={props.value}
        />
    </div>
)

export default LoginButton