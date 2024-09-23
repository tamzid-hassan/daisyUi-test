import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
    return (
        <>
            <div className="drop-shadow-lg navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-xl btn btn-accent">
                        Tasker Pro
                        <i className="fa-solid fa-list-check"></i>
                    </a>
                </div>
                <div className="flex-none">
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    )
}

export default Header