export const Photo3 = ({ width, name, date }) => {
  return (
    <div className="Photo3">
      <div className="photo-bb">
        <img
          width={width}
          src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/277993800_160763889652449_3931467693324004403_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEAk3qyODF8cJEqvjY33tBDThspeLkq5SlOGyl4uSrlKY_ejGYgrHD78CcdJEJbWD4RRK7jJ3xIdlsaxTIOcMMD&_nc_ohc=SE_LoipmjUoAX8Nu8CT&_nc_ht=scontent.fuln8-1.fna&oh=00_AT-bJ38C12RZ9LvUUP72hghdATciB4ZxpDCqRKxcwLvqfQ&oe=6353F45A"
          alt=""
        />
      </div>
      <span>{name}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
};
