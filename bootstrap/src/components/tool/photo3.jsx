export const Photo3 = ({ width, name, date }) => {
  return (
    <div className="Photo3">
      <div className="photo-bb">
        <img
          width={width}
          src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/313417576_200688575659980_7512542520687818566_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGh4sQ6nF7PARAnOKlxkixTcvGsMPmfgIty8aww-Z-Ai3p8HlXxVA8H0ShNkSfUAAhXXawcO65Qxnth9zboRGb9&_nc_ohc=8gdPQUx-vF4AX-KvsOX&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCv8JQuQRb00FGd26woeh85m_7UiltV6mMmpP3GMOLY3g&oe=637A7195"
          alt=""
        />
      </div>
      <span style={{ fontSize: "17px", marginLeft: "30px" }}>{name}</span>
      <span>|</span>
      <span style={{ fontSize: "17px" }}>{date}</span>
    </div>
  );
};
