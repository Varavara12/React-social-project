import React from 'react';
import s from './Profileinfo.module.css';

class ProfileStatus extends React.Component  {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        /*Для изменения state специальный метод setState() и этот метод асинхронный*/
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () =>{
        /*Для изменения state специальный метод setState() и этот метод асинхронный*/
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange =(e) => {   /*Обрабатывает инпут и значение сохраняет в локальный state в свойство status*/
        this.setState({
            status: e.currentTarget.value
        })

    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>

        );
    }


};

export default ProfileStatus;