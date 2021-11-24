import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [defaultData, setDefaultData] = useState([]);
  const [feed, setFeed] = useState([]);
  const [detail, setDetail] = useState([]);

  const getFeed = async (id = "beef") => {
    try {
      const response = await fetch(`https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=${id}&apiFeedType=moreFrom&authorId=Yummly`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "yummly2.p.rapidapi.com",
          "x-rapidapi-key": "e20dbc076emshf69d1433fe8e4abp1098d7jsn71923be30e67",
        },
      });

      const data = await response.json();
      setFeed(data.feed);
    } catch (error) {}
  };

  const getFeedDetail = async (id) => {
    try {
      const response = await fetch(`https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=${id}&authorId=Yummly`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "yummly2.p.rapidapi.com",
          "x-rapidapi-key": "e20dbc076emshf69d1433fe8e4abp1098d7jsn71923be30e67",
        },
      });
      const data = await response.json();
      setDetail(data.feed);
    } catch (error) {
      console.log("errrorr", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  useEffect(() => {
    fetch("https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=5&start=0&id=recipe%2FMelt-In-Your-Mouth-Baked-Chicken-Breasts-9073095&apiFeedType=moreFrom&authorId=Yummly", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": "e20dbc076emshf69d1433fe8e4abp1098d7jsn71923be30e67",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDefaultData(data.feed);
      });
  }, []);

  return <AppContext.Provider value={{ defaultData, feed, getFeed, detail, getFeedDetail }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
