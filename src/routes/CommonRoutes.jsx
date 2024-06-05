
// project import
import MinimalLayout from "../layout/minimal/MinimalLayout";
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsOfService from '../pages/legal/TermsOfService';
import AboutUs from '../pages/info/AboutUs';
import ForwardLinkPage from "../pages/qrcode/ForwardLinkPage";
import FeedbackLinkPage from "../pages/feedback/FeedbackLinkPage";

const CommonRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
      {
        path: 'q/:linkId',
        element: <ForwardLinkPage />
      },
      {
        path: 'f/:linkId',
        element: <FeedbackLinkPage />
      },
      {
        path: 'legal/privacy',
        element: <PrivacyPolicy />
      },
      {
        path: 'legal/terms',
        element: <TermsOfService />
      },
      {
        path: 'info/about',
        element: <AboutUs />
      }
    ]
  };
  
  export default CommonRoutes;