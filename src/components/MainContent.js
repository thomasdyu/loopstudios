import './MainContent.css';
// import ContentImg from '../images/desktop/image-interactive.jpg';

const MainContent = () => {
    return (
        <div className='container'>
            <div className='content-container'>
                {/* <img
                    className='content-img'
                    src={ContentImg}
                    alt='Interactive VR'
                /> */}
                <div className='text-content'>
                    <h1>The Leader in Interactive VR</h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed businessess through digital
                        experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
