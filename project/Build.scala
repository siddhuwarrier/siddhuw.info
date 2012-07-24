import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "siddhuw.info"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
       "org.mockito" % "mockito-all" % "1.9.0",
       "org.jbehave" % "jbehave-core" % "3.6.8"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = JAVA).settings(
    )

}
