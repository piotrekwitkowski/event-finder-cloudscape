import { Route, Routes } from "react-router-dom"
import { Page404 } from "../404"
import { DashboardPage } from "../dashboard"
import { EnvironmentInfoPage } from "../environment-info"
import { EventsPage } from "../events"
import { EventPage } from "../events/event"
import { NewEventPage } from "../events/new"
import { HomePage } from "../home"

export const Main = () => {

  return (
    <Routes>
      {/* TODO: improve root navigation */}
      {/* <Route path='/' element={homePageVisited ? <MyEventsPage /> : <Navigate to='/home' />} /> */}
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/events/new' element={<NewEventPage />} />
      <Route path='/events/:id' element={<EventPage />} />
      <Route path='/env' element={<EnvironmentInfoPage />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}
