// REACT & LIBRARIES
import { useSearchParams, NavLink } from "react-router-dom";

// STYLES
import "./Resources.scss";

// FEATURES COMPONENTS
import { ResourceCard } from "../../index";

// UI COMPONENTS
import { Pagination, Spinner } from "../../../ui";

// CONTEXTS
import { useResourceContext } from "../../../contexts";

// UTILITIES
import { RESOURCES_PAGE_SIZE } from "../../../utils";

function Resources() {
  const { resources, isPending } = useResourceContext();
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
          newResources?.map((resource, index) => (
            <NavLink key={index} to={`/resources/${index}`}>
              <ResourceCard
                index={index}
                title={resource.title}
                author={resource.source.name}
                description={resource.description}
                date={resource.publishedAt}
                image={resource.image}
              />
            </NavLink>
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
