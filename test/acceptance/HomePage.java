package acceptance;

import acceptance.steps.HomePageSteps;
import org.jbehave.core.configuration.Configuration;
import org.jbehave.core.configuration.MostUsefulConfiguration;
import org.jbehave.core.io.LoadFromClasspath;
import org.jbehave.core.junit.JUnitStory;
import org.jbehave.core.reporters.Format;
import org.jbehave.core.reporters.StoryReporterBuilder;
import org.jbehave.core.steps.InjectableStepsFactory;
import org.jbehave.core.steps.InstanceStepsFactory;
import org.junit.Test;

/**
 * Created with IntelliJ IDEA.
 * User: siddhu
 * Date: 10/07/2012
 * Time: 23:16
 * To change this template use File | Settings | File Templates.
 */
public class HomePage extends JUnitStory {

    // Here we specify the configuration, starting from default MostUsefulConfiguration, and changing only what is needed
    @Override
    public Configuration configuration() {
        return new MostUsefulConfiguration()
                // where to find the stories
                .useStoryLoader(new LoadFromClasspath(this.getClass()))
                        // CONSOLE and TXT reporting
                .useStoryReporterBuilder(new StoryReporterBuilder()
                        .withDefaultFormats()
                        .withFormats(Format.CONSOLE, Format.TXT));
    }

    @Override
    public InjectableStepsFactory stepsFactory() {
        // varargs, can have more that one steps classes
        return new InstanceStepsFactory(configuration(), new HomePageSteps());
    }

    @Test
    public void run() throws Throwable {
        super.run();
    }
}
