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
    <div className="resources_container">
      <div className="resources_header">
        <h1 className="resources_header_text">Resources</h1>
      </div>

      <div className="resources-middle-container">
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
          <h4 className="no-resources">
            No resources currently. Please come back again later! 📚
          </h4>
        )}
      </div>

      <Pagination total={resources?.length} pageSize={RESOURCES_PAGE_SIZE} />
    </div>
  );
}

export default Resources;
