import React, {MouseEvent, useState} from 'react';
import LegacyComponent from "./LegacyComponent";

interface IUser {
    name: string;
}

type MyComponentProps = {
    defaultName: string;
    title?: string;
}

const SomeComponent = ({defaultName, title = 'posts'}: MyComponentProps) => {

    const [user, setuser] = useState<IUser>({name: 'Clickme'});

    const setNewUser = (event: MouseEvent, newName: string) => {
        const newUser: IUser = {
            name: newName,
        }
        setuser(newUser);
    }

    return (
        <div>
            <h1 onClick={e => {
                setNewUser(e, 'Super Posts')
            }}>{user.name}</h1>
            <h2>{defaultName}</h2>
            <LegacyComponent title={title}/>
        </div>
    )

}

export default SomeComponent;
