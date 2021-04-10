function Welcome({msg,children}){

//console.log(props);
//let msg=props.msg;
//let {msg}=props;

    return(
        <div>
            {msg}
            {children}
        </div>

        );
}

export default Welcome;