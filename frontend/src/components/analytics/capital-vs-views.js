
import {
  Stack,
  VStack,
  HStack,
  Heading,
  Flex,
  Box,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import { Line, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
import { React, useState, useEffect } from "react";


ChartJS.register(CategoryScale,LinearScale, PointElement, LineElement, Tooltip, Legend);


const options = {
  plugins:{legend:{display:false}},
  layout:{padding:{bottom:100}},
  scales: {
    y:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
      grid:{
        color:"#243240"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      }
    }
  },
};

export default function CapitalvsViewsChart() {
  const axios = require("axios");
  const [Results, setSearchResults] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [displayChart, setDisplayChart] = useState(false);

  function handleFetch() {
    const backend_avg_num_tags_url = "http://127.0.0.1:8000/videos/";
    axios.get(backend_avg_num_tags_url).then(function (response) {});
    setBtnClicked(true);
  }
  function handleDisplayChart() {
    setDisplayChart(true);
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/videos/")
  .then(function (response) {
    let result = response.data;
    setSearchResults([...result]);
    console.log("searchResults:", Results);
  })
  }, [Results.length]);

  // const displaygraph = async () => {
  //   const vids = await getVideos()
  //   let result = vids.data;
  //   setSearchResults([...result]);
  //   console.log("searchResults:", searchResults);
  //   let arr = searchResults.map(info => info.id)
  //   let newarr = arr.map(item => ({ x: item, y: item}));
  //   return newarr;
  // }

  


      var data = {
        datasets: [
          {
            label: "Number of Capital Letters (x) vs Number of Views(y)",
            data: makeLabels(),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };

    // function makeLabels() {
    //  let arr = searchResults.map(info => info.id)
    //  let newarr = arr.map(item => ({ x: item, y: item}));
    //  return{
    //    labels: newarr,
    //    array: arr
    //  };
    // };

    function makeLabels() {
      
      let titles = [Results.map(info => info.channelTitle)];
      let views = [Results.map(info => info.viewCount)];

      let arr = []
      let capital_count = 0

      for(let i = 0; i < Results.length; ++i){
        capital_count = 0;
        for(let j = 0; j < titles[0][i].length; ++j){
          if(titles[0][i].charAt(j) === titles[0][i].charAt(j).toUpperCase()){
            capital_count++ 
          }
          }
        arr[i] = { x: capital_count, y: views[0][i]}
      }
      
      return arr;
    };

 // return <Scatter data={data} />;
 return (
  <Flex>
    <VStack as={"column"}>
      <Box mt={15}>
        <Heading size={"lg"}>
          Here's the relationship between the amount of capital letters versus view count
        </Heading>
      </Box>

      <Box my={10}>
        <Button variant={"solid"} onClick={handleDisplayChart} my={5}>
          <Text>Click to load the data</Text>
        </Button>
        {displayChart === true ? <Scatter data={data}></Scatter> : ""}
      </Box>

      <Box mt={20}></Box>
    </VStack>
  </Flex>
);
}