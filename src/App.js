import React, {useState, useEffect} from 'react';

// import axios 
import axios from 'axios';

// import icons
import { 
  IoMdSunny, 
  IoMdRainy, 
  IoMdCloudy, 
  IoMdSnow, 
  IoMdThunderstorm, 
  IoMdSearch
} from 'react-icons/io';

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
  BsSnow
} from 'react-icons/bs';

import { TbTemperatureCelsius} from 'react-icons/tb';
import { ImSpinner8} from 'react-icons/im';

// api key
const APIkey = 'c096698d8315f53e530941dd7eb03999'

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Bucharest');

  // fetch the data
  useEffect(()=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then(res => {
      setData(res.data);
    });
  }, [location]);

  // if data is false show the loader
  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className='text-5xl animate-spin' />
        </div>
      </div>
    )
  }

  // set the icon according to the weather
  let icon;
  console.log(data.weather[0].main);


  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  return (
    <div>
      {/* form */}
      <form>form</form>
      {/* card */}
      <div>
        <div>
          {/* card top */}
          <div>card top</div>
          {/* card body */}
          <div>card body</div>
          {/* card bottom */}
          <div>card bottom</div>
        </div>
      </div>
    </div>

  );
};

export default App;
