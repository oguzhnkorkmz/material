import './App.css'
import { ThemeProvider, colors, createTheme } from '@mui/material'
import { LessonCustomization } from './components/LessonCustomization'
// import { LessonnTimeLine } from './components/LessonnTimeLine'
// import { LessonMasonry } from './components/LessonMasonry'
// import { LessonTabs } from './components/LessonTabs'
// import { LessonDateRange } from './components/LessonDateRange'
// import { LessonDateTime } from './components/LessonDateTime'
// import { LessonLoadingButton } from './components/LessonLoadingButton'
// import { LessonTable } from './components/LessonTable'
// import { LessonProgress } from './components/LessonProgress'
// import { LessonSkeleton } from './components/LessonSkeleton'
// import { LessonAlert } from './components/LessonAlert'
// import { LessonDialog } from './components/LessonDialog'
// import { LessonSnackbar } from './components/LessonSnackbar'
// import { LessonTooltip } from './components/LessonTooltip'
// import { LessonAvatar } from './components/LessonAvatar'
// import { LessonList } from './components/LessonList'
// import { LessonBottomNavigation } from './components/LessonBottomNavigation'
// import { LessonSpeedDial } from './components/LessonSpeedDial'
// import { LessonBadge } from './components/LessonBadge'
// import { LessonDrawer } from './components/LessonDrawer'
// import { LessonBreadCrumb } from './components/LessonBreadCrumb'
// import { LessonLink } from './components/LessonLink'
// import { LessonPaper } from './components/LessonPaper'
// import { LessonImageList } from './components/LessonImageList'
// import { LessonAppbar } from './components/LessonAppbar'
// import { LessonAccordion } from './components/LessonAccordion'
// import { LessonCard } from './components/LessonCard'
// import { LessonGrid } from './components/LessonGrid'
// import { LessonStack } from './components/LessonStack'
// import { LessonBox } from './components/LessonBox'
// import { LessonAutoComplete } from './components/LessonAutoComplete'
// import { LessonCheckbox } from './components/LessonCheckbox'
// import { LessonRadioGroup } from './components/LessonRadioGroup'
// import { LessonSelect } from './components/LessonSelect'
// import { LessonButton } from './components/LessonButton'
// import { LessonButtonGroup } from './components/LessonButtonGroup'
// import { LessonTypography } from './components/LessonTypography'
// import { LessonTextField } from './components/LessonTextField'

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500]
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonTextField /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckbox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppbar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        {/* <LessonLink /> */}
        {/* <LessonBreadCrumb /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge />ß */}
        {/* <LessonSpeedDial /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonTooltip /> */}
        {/* <LessonAlert /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackbar /> */}
        {/* <LessonProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable /> */}
        {/* <LessonDateTime /> */}
        {/* <LessonDateRange /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonnTimeLine /> */}
        <LessonCustomization />
      </div>
    </ThemeProvider>

  )
}

export default App
