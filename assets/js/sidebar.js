const url = window.location.pathname;
// console.log(url);

const active_article = document.querySelector(`.sidebar a[href="${url}"]`);

if (active_article)
{
    active_article.classList.add('sidebar-current');
    // console.log(active_article);

    var child = active_article;
    while (child.tagName !== "BODY")
    {
        let parent = child.parentNode; // 获取父节点

        if (!parent) break;

        if (parent.tagName == "DIV" && parent.hasAttributes())
        {
            const id = parent.getAttribute("id");
            if (id && id.startsWith("section"))
            {
                // console.log(parent);
                parent.setAttribute("aria-expanded", "true");
                parent.classList.remove("collapsed");
                parent.classList.add("show");
                // parent.classList.add("active");

                let up = parent.parentNode;
                if (up)
                {
                    // console.log("parent", up);
                    for (i = 0; i < up.children.length; ++i)
                    {
                        let brother = up.children[i];
                        if (brother.tagName == "H2")
                        {
                            // console.log("h2", brother);
                            if (brother.hasChildNodes)
                            {
                                let brotherButton = brother.children[0];
                                //console.log("button", brotherButton);

                                brotherButton.setAttribute("aria-expanded", "true");
                                brotherButton.classList.remove("collapsed");
                                brotherButton.classList.add("show");
                                
                                break;
                            }
                            
                        }
                    }
                }
            }
        }
        child = parent;
    }
}
