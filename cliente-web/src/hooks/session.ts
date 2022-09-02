type Session = {
    userId: number | undefined;
    shoppingCart: number[];
};
const sessionExists = (): boolean => {
    const session = localStorage.getItem("session");

    return session !== null;
};
export const getSession = (): Session => {
    //init session if it doesn't exist
    if (!sessionExists()) createSession();
    //return session
    const session = JSON.parse(localStorage.getItem("session")!) as Session;
    return session;
};
const updateSession = (updatedSession: Session) => {
    localStorage.setItem("session", JSON.stringify(updatedSession));
};
const createSession = (userId?: number) => {
    const session: Session = {
        userId: userId,
        shoppingCart: [],
    };
    localStorage.setItem("session", JSON.stringify(session));
};
export const setSessionUser = (userId: number) => {
    const session = getSession();
    session.userId = userId;
    updateSession(session);
};
export const clearSesionUSer = () => {
    const session = getSession();
    session.userId = undefined;
    updateSession(session);
};
export const addToCart = (courseId: number) => {
    const session = getSession();
    //make a set out of the cart to avoid repeated items
    const cartSet = new Set(session.shoppingCart);
    cartSet.add(courseId);
    session.shoppingCart = Array.from(cartSet);
    updateSession(session);
};
export const removeFromCart = (removeId: number) => {
    const session = getSession();
    session.shoppingCart = session.shoppingCart.filter((courseId) => {
        return courseId !== removeId;
    });
    updateSession(session);
};
export const getAmountInCart = () => {
    const session = getSession();
    return session.shoppingCart.length;
};
export const alreadyInCart = (courseId: number) => {
    const session = getSession();
    return session.shoppingCart.includes(courseId);
};
