import { useRef } from 'react';
import { Link } from 'react-router-dom'

export const NotFound = () => {
      let ref = useRef(0);
      function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
      
      return(
        <div className={'not_found_container'}>
            <p>Oops! Page Not Found</p>
            <p>But... Don't worry</p>
            <p>As soon as you can't find the right page, we have a game for you</p>
            <p>Click on the button and I will show you how many times you have clicked it</p>
            <button onClick={handleClick}>
                Click me!
            </button>
            <p>It is fun, isn't it?</p>
            <p>Was it enough?</p>
            <p>Okay...Fine...Let's go back to <Link to={'/'}>homepage</Link></p>
        </div>
    )
}