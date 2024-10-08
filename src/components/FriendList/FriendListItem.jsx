import clsx from "clsx";
import css from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
            <>
                <li className={css.friendsListItem}>
            <img src={avatar} alt={name} width="48px" />
            <p className={css.friendsName}>{name}</p>
                    <p className={clsx(css.friendsStatus, {
                        [css.statusIsOnline]: isOnline === true,
                        [css.statusIsOffline]: isOnline === false,
                    })}>{isOnline === true ? "Online" : "Offline"}</p>
                    </li>
        </>
    );
}

export default FriendListItem