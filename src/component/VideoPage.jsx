import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import dotenv from 'dotenv/config.js'  
// dotenv.config()

const VideoPage = () => {
  const { id } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1265353119; // Replace with your actual ZegoCloud appID
      const serverSecret = 'f4e2fd3339cbbfb7b3dfef2c5a3f9eec'; // Replace with your actual serverSecret
      const roomID = id;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        id
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url: window.location.origin + window.location.pathname + '?roomID=' + roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [id]);

  return <div 
  className="myCallContainer"
   ref={containerRef}
   style={{ width: '100vw', height: '100vh' }}
  ></div>;
};

export default VideoPage;
