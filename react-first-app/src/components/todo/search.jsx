export const Search = ({ setSearch, search, button, setButton }) => {
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const filterg = () => {
    // const a = button.filter((to) => to.id !== i);
    const hu = button.filter((e) => e.text == search);
    setButton(hu);
  };
  return (
    <div>
      <input className="input" onChange={searcher} type="text" />
      <button onClick={() => filterg()}>Search</button>
    </div>
  );
};
