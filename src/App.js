import Profile from "./components/Profile/Profile"
import Statistics from "./components/StatsSection/Statistics"
import FriendList from "./components/Friends/FriendList"
import TransactionHistory from "./components/Transactions/TransactionHistory"
// import styles from "./index.css"
import user from "./components/Profile/user.json"
import statsData from "./components/StatsSection/statistical-data.json"
import friends from "./components/Friends/friends.json"
import transactions from "./components/Transactions/transactions.json"


function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                statsFollowers={user.stats.followers}
                statsViews={user.stats.views}
                statsLikes={user.stats.likes}
                />
            <Statistics statsData={statsData} />
            < FriendList friends={friends}/>
            < TransactionHistory items={transactions}/>
        </div>
    )
}

export default App