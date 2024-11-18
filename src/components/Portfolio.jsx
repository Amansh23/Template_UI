// import React from "react";

// const Portfolio = () => {
//   return (
//     <div className="Portfolio_main_container">
//       <h1>Our Portfolio</h1>
//       <div className="Portfolio_main_window_cont">
//         <div className="Portfolio_main_window_upper">
//           <div className="Portfolio_main_window_imagebox">
//             <img
//               src="https://images.unsplash.com/photo-1731351621470-8aebda14d242?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="imgwindow"
//             />
//           </div>
//           <div className="Portfolio_main_window_imagebox">
//             <img
//               src="https://images.unsplash.com/photo-1731524999532-642d0c39ad76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="imgwindow"
//             />
//           </div>
//         </div>
//         <div className="Portfolio_main_window_lower">
//           <div className="Portfolio_main_window_imagebox">
//             <img
//               src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="imgwindow"
//             />
//           </div>
//           <div className="Portfolio_main_window_imagebox">
//             <img
//               src="https://images.unsplash.com/photo-1731410612760-4d9ae680d5e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="imgwindow"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef();
  const upperRef = useRef();
  const contRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        setIsScrollable(top <= 0); // Toggle when it hits the top
      }
    };

    if (upperRef.current && contRef.current) {
      const upperHeight = upperRef.current.offsetHeight;
      contRef.current.style.height = `${upperHeight}px`;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Portfolio_main_container" ref={containerRef}>
      <h1>Our Portfolio</h1>
      <div className="Portfolio_main_window_cont" ref={contRef}>
        <div className="Portfolio_main_window_upper" ref={upperRef}>
          <div className="Portfolio_main_window_imagebox">
            <img
              src="https://images.unsplash.com/photo-1731351621470-8aebda14d242?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imgwindow"
            />
          </div>
          <div className="Portfolio_main_window_imagebox">
            <img
              src="https://images.unsplash.com/photo-1731524999532-642d0c39ad76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imgwindow"
            />
          </div>
        </div>
        <div
          className={`Portfolio_main_window_lower ${
            isScrollable ? "active" : ""
          }`}
        >
          <div className="Portfolio_main_window_imagebox">
            <img
              src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imgwindow"
            />
          </div>
          <div className="Portfolio_main_window_imagebox">
            <img
              src="https://images.unsplash.com/photo-1731410612760-4d9ae680d5e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imgwindow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
