type Session = {
    userId: number;
    shoppingCart: number[];
};
export const getSession = (): Session | null => {
    const session = JSON.parse(localStorage.getItem("session") || "{}");
    if (Object.keys(session).length === 0) return null;
    return session;
};
const updateSession = (updatedSession: Session) => {
    localStorage.setItem("session", JSON.stringify(updatedSession));
};
export const createSession = (userId: number) => {
    const session: Session = {
        userId,
        shoppingCart: [],
    };
    localStorage.setItem("session", JSON.stringify(session));
};
export const deleteSession = () => {
    localStorage.removeItem("session");
};

export const addToCart = (courseId: number) => {
    const session = getSession()!;
    session.shoppingCart.push(courseId);
    updateSession(session);
};
export const getAmountInCart = () => {
    const session = getSession();

    if (session === null) return 0;
    return session.shoppingCart.length;
};
