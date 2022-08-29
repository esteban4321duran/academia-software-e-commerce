import { useLocation } from "react-router-dom";

type CourseState = {
    courseId: number;
};
const useCourseIdFromState = () => {
    const { courseId } = useLocation().state as CourseState;
    return courseId;
};

export default useCourseIdFromState;
