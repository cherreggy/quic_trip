import MainPage from "./mainpage";

function NormalBody() {
  return (
    <div>
      <img src="common.png" />
    </div>
  );
}

export default function Normal() {
  console.log(window.location.search.match(new RegExp(`(?<=\\bsub=)[^&]*`))[0]);
  return (
    <MainPage
      content={<NormalBody></NormalBody>}
      defaultOpenKeys={[
        window.location.search.match(new RegExp(`(?<=\\bpage=)[^&]*`))[0],
      ]}
      defaultSelectedKeys={[
        window.location.search.match(new RegExp(`(?<=\\bsub=)[^&]*`))[0],
      ]}
    ></MainPage>
  );
}
