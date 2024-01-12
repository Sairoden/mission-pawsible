// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./Resources.scss";

// FEATURES COMPONENTS
import { ResourceCard } from "../../index";

// UI COMPONENTS
import { Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetResources } from "../../../hooks";

// UTILITIES
import { RESOURCES_PAGE_SIZE, limitWords } from "../../../utils";

function Resources() {
  const { resources, isPending } = useGetResources();
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const indexOfLastResource = currentPage * RESOURCES_PAGE_SIZE;
  const indexOfFirstResource = indexOfLastResource - RESOURCES_PAGE_SIZE;

  const newResources = resources?.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  if (isPending) return <Spinner />;

  return (
    <div className="resources spacing-t">
      <div className="container">
      <div className="resources_header">
        <h2 className="resources_header_main">Resources</h2>
      </div>

      <div className="resources_body spacing-t">
        {newResources.length > 0 ? (
          newResources?.map(resource => (
            <a
              key={`${resource.author} ${resource.title}`}
              target="_blank"
              rel="noreferrer"
              href={resource.url}
            >
              <ResourceCard
                title={resource.title}
                author={resource.author}
                description={limitWords(resource.description, 600)}
                date={resource.publishedAt}
                image={resource.urlToImage}
              />
            </a>
          ))
        ) : (
          <h3 className="no-data">
            No resources currently. Please come back again later! 📚
          </h3>
        )}


      </div>

      <Pagination total={resources?.length} pageSize={RESOURCES_PAGE_SIZE} />
      </div>
    </div>
  );
}

export default Resources;
