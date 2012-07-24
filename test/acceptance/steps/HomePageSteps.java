package acceptance.steps;

import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;
import play.libs.F;
import play.test.TestBrowser;

import static org.junit.Assert.assertTrue;
import static play.test.Helpers.HTMLUNIT;
import static play.test.Helpers.running;
import static play.test.Helpers.testServer;

/**
 * Created with IntelliJ IDEA.
 * User: siddhu
 * Date: 10/07/2012
 * Time: 23:19
 * To change this template use File | Settings | File Templates.
 */
public class HomePageSteps {
    @When("I visit $pageName")
    public void visitPageName(String pageName) {
        System.out.println(pageName);
    }

    @Then("I should see text $text")
    public void seeText(final String text) {
        running(testServer(9000), HTMLUNIT, new F.Callback<TestBrowser>() {
            public void invoke(TestBrowser browser) {
                browser.goTo("http://localhost:9000");
                assertTrue(browser.title().equals(text));
            }
        });
    }

}
