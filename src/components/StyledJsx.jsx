export const StyledJsx = () => {
  //css in jsxはhoverは使えない。pluginを使えば使用できる
  //VS codeだとcss in jsxの部分が色分けされる拡張機能がある
  //Reactのフレームワークのnext.jsにStyled jsxがデフォルトで入っているので選択肢の１つになる。
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
