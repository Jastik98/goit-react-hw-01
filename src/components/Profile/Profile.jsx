import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.boxWrapper}>
      <div className={css.cardWrapper}>
        <img
          className={css.profileImg}
          src={image}
          alt="User avatar"
          width="60px"
        />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsListItem}>
          <span>Followers</span>
          <span className={css.statsItem}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Views</span>
          <span className={css.statsItem}>{stats.views}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Likes</span>
          <span className={css.statsItem}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;