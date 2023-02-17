import React from 'react';
import LoadingBar from 'react-top-loading-bar';
// import { useAppDispatch } from 'shared/hooks/global';
// import { getUser } from "~selectors/userSelectors";
// import useEventListener from "~shared/hooks/useEvents";
// import { AppActions } from "./actions/appActions";

export const ConnectAPI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, _setProgress] = React.useState(0);
  const [networkRequestThread, setNetworkRequestThread] = React.useState<NodeJS.Timeout | string>(
    '',
  );

  // const user = useSelector((state) => getUser(state));
  const user = { token: '123', isLoggedIn: true };

  const setProgress = (val: number) => {
    if (!user) _setProgress(0);
    else _setProgress(val);
  };

  // const dispatch = useAppDispatch();

  // const { syncKanbanBoardsData } = AppActions(dispatch);

  // useEventListener("user.logout", () => {
  //   window.clearTimeout(networkRequestThread);
  // });

  React.useEffect(() => {
    console.log('Initializing API...');

    if (!user || !user.token || !user.isLoggedIn) {
      setProgress(0);
      window.clearTimeout(networkRequestThread);
      return;
    }

    const _networkRequestThread = setTimeout(() => {
      fetchNecessaryData();
    }, 10);
    setNetworkRequestThread(_networkRequestThread);

    return () => {
      window.clearTimeout(networkRequestThread);
    };
  }, []);

  const fetchNecessaryData = async () => {
    console.log('Fetching necessary data...');

    // const { payload: categoriesPayload } = await dispatch(fetchCategories({}));

    // setProgress(25);

    // await dispatch(fetchProducts({}));

    // setProgress(50);

    // const {payload: fridgeProducts} = await dispatch(fetchFridgeProducts({}));

    // setProgress(75);

    // await dispatch(
    //   fetchRecipes({
    //     strCategory: (categoriesPayload as Category[])[0].strCategory,
    //     products: fridgeProducts as Product[],
    //   })
    // );

    setProgress(100);
  };

  return (
    <>
      <LoadingBar
        progress={progress}
        height={progress === 0 ? 0 : 3}
        color="#FE753F"
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      {children}
    </>
  );
};
