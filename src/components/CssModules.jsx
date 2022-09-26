import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    //importした要素にしか適応されないので使いやすいか?
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};
