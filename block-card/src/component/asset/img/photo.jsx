export const Photo = ({ width, height }) => {
  return (
    <div className="photo">
      <div className="photo-b">
        <img
          width={width}
          height={height}
          src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/310969637_196758549386316_294067289263140972_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG8lqjksa8UQeelMLXlroZo4o2mxYBBd6TijabFgEF3pEsi4XtGka0SUKemm9Ayc9rYMGxc3ryEGQNb5PoPgdGI&_nc_ohc=QjHi1dB6KSAAX9FIvyN&_nc_ht=scontent.fuln8-1.fna&oh=00_AT9h_dXsWxBthxBjpBiBwI4q87W1wdBRhFlOGVneDaaamA&oe=63540EF8"
          alt=""
        />
      </div>
      <span>Faze Tea</span>
    </div>
  );
};
