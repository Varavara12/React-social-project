import React, {useEffect, useState} from 'react';
import s from './Profileinfo.module.css';

const ProfileStatusWithHooks = (props) =>  {

        const [editMode, setEditMode]  = useState(false);
        const [status, setStatus]  = useState(props.status);

        useEffect( () => {
             setStatus(props.status)
        }, [props.status]);

    const activateEditMode = () => {
         setEditMode(true)
    };

   const deactivateEditMode = () =>{
         setEditMode(false);
        props.updateStatus(status)
    };
   const onStatusChange =(e) => {   /*Обрабатывает инпут и значение сохраняет в локальный state в свойство status*/
        setStatus(e.currentTarget.value)
    };

        return (
            <div className={s.main_status}>
                { !editMode &&
                    <div className={s.status}>
                        <span onClick={activateEditMode}>{props.status || "Click my status"}</span>
                    </div>
                }
                {editMode &&
                    <div className={s.input}>
                        <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>

        )
};

export default ProfileStatusWithHooks;