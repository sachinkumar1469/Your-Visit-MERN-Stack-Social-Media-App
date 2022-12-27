import React from 'react'
import { useParams } from 'react-router-dom';

import useForm from '../../utils/useForm';

import Input from '../../shared/formComponents/Input';

function UpdatePlace() {
  const {updatePlaceId} = useParams();
  


  const [[title,setTitle],[description,setDescription]] = useForm("title","description");
  

  return (
    <div className='add-new-place'>
      <form className='new-place-form'>
      <Input
        type={"text"}
        placeHolder={"Enter New Title"}
        returnValueToParent={setTitle}
        id={"Title"}
        element={"input"}
        label={"Title"}
        defaultValue={title}
      />
      <Input
        type={"text"}
        placeHolder={"Enter New Description"}
        returnValueToParent={setDescription}
        id={"Description"}
        element={"input"}
        label={"Description"}
        defaultValue = {description}
      />
      <div className="btn">Submit</div>
    </form>
    
    </div>
  )
}

export default UpdatePlace
