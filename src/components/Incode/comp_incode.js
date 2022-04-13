import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CircularIndeterminate from "./circularIndeterminate"
import "../../css/Incode.css"
import { incodeServices } from "../../services/incode.services"
import Box from "@mui/material/Box"

let onBoarding
let session

const container = document.getElementById("camera-container")

export default function COMP_Incode() {
  function createOnBoarding() {
    /* PRD  
    const apiKey = "64993050ce0ea4c9273ba590e92005a1cea69e34"
    const apiURL = "https://saas-api.incodesmile.com/"
*/
    /* DEV*/
    // const apiURL = "https://demo-api.incodesmile.com/"
    // const apiKey = "f3df8f605f09f74f374a07fcd8aa4294cb6dca80"

    const apiURL = process.env.REACT_APP_API_URL_INCODE
    const apiKey = process.env.REACT_APP_API_KEY_INCODE

    return window.OnBoarding.create({
      apiKey,
      apiURL,
      lang: "es",
    })
  }

  function createSession() {
    return onBoarding.createSession("ALL")
  }

  function showError() {
    alert("Ha ocurrido al procesar la solicitud")
  }

  async function renderFrontTutorial() {
    onBoarding.renderFrontTutorial(container, {
      onSuccess: renderFrontIDCamera,
      token: session,
    })
  }

  async function renderFrontIDCamera() {
    await Send_Zenziya_update()

    onBoarding.renderCamera("front", container, {
      onSuccess: renderBackTutorial,
      onError: showError,
      token: session,
      numberOfTries: 50,
    })
  }

  async function renderBackTutorial() {
    onBoarding.renderBackTutorial(container, {
      onSuccess: renderBackIDCamera,
      token: session,
    })
  }

  function renderBackIDCamera() {
    onBoarding.renderCamera("back", container, {
      onSuccess: processId,
      onError: showError,
      token: session,
      numberOfTries: 50,
    })
  }

  function processId() {
    container.innerHTML = "<p>Loading...</p>"
    onBoarding.processId({ token: session.token }).then(() => {
      container.innerHTML = ""
      renderSelfieCamera()
    })
  }

  function renderSelfieCamera() {
    onBoarding.renderCamera("selfie", container, {
      onSuccess: async () => {
        await incodeServices.notifyEndProcess(
          searchParams.get("EntityIdOnboarding")
        )
        alert("Felicidades has completado todo el proceso.")
        window.location.href =
          "https://api.whatsapp.com/send?phone=18494104542&text=Finalic%C3%A9%20el%20proceso"
      },
      onError: showError,
      token: session,
      numberOfTries: 50,
    })
  }

  const [message, setMessage] = useState("")
  const [searchParams] = useSearchParams()

  function Send_Zenziya_update() {
    var data = {
      interviewId: session.interviewId,
      interviewCode: session.interviewCode,
      token: session.token,
      EntityIdOnboarding: searchParams.get("EntityIdOnboarding"),
    }
    incodeServices.notifyBeginProcess(data)
  }

  useEffect(() => {
    async function doSomething() {
      try {
        const isExpiratedLink = await incodeServices.isExpiratedLink(
          searchParams.get("EntityIdOnboarding")
        )
        if (!isExpiratedLink) {
          onBoarding = createOnBoarding() // initialize the instance
          await onBoarding.warmup()
          const _session = await createSession()
          console.log(_session)
          session = _session
          await renderFrontTutorial() // render and start autodetect of the front ID camera
        } else {
          setMessage("El link ha expirado. Contacte a un administrador.")
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    if (searchParams.get("EntityIdOnboarding") === null)
      setMessage("URL inválida")
    else doSomething() //
  }, [])

  return message.length === 0 ? (
    <CircularIndeterminate />
  ) : (
    <Box style={{ textAlign: "center" }} p={5}>
      {message}
    </Box>
  )
}
