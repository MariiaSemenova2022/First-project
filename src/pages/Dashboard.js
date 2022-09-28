const Dashboard = ({ user }) => {
    return (
        <section className="section">
            <h4> Thank you for contacting us, {user?.name}</h4>
        </section>
    );
};

export default Dashboard;